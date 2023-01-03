/*! https://github.com/blockmar/slackdown by @blockmar | MIT license */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.slackdown = factory();
    }
}(this, function () {

    var RE_ALPHANUMERIC = new RegExp('^\\w?$'),
        RE_TAG = new RegExp('<(.+?)>', 'g'),
        RE_STRIKE = new RegExp('~([^_]+?)~', 'g'),
        RE_BOLD = new RegExp('\\*([^\\*]+?)\\*', 'g'),
        RE_ITALIC = new RegExp('_([^_]+?)_', 'g'),
        RE_FIXED = new RegExp('`([^`]+?)`', 'g');

    var payloads = function(tag, start) {
        if(!start) {
            start = 0;
        }
        var length = tag.length;
        return pipeSplit(tag.substr(start, length - start));
    };

    var pipeSplit = function(payload) {
        return payload.split('|');
    };

    var tag = function(tag, attributes, payload) {
        if(!payload) {
            payload = attributes;
            attributes = {};
        }

        var html = "<".concat(tag);
        for (var attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) {
                html = html.concat(' ', attribute, '="', attributes[attribute], '"');
            }
        }
        return html.concat('>', payload, '</', tag, '>');
    };

    var matchTag = function(match,slackMember) {
        var action = match[1].substr(0,1),
            p;

        switch(action) {
            case "!":
                return '@'+tag("span", { class: "slack-cmd" }, payloads(match[1], 1)[0]);
            case "#":
                p = payloads(match[1], 2);
                return action+tag("span", { class: "slack-channel"}, (p.length === 1 ? p[0] : p[1]));
            case "@":
                var obj = JSON.parse(slackMember);
                p = payloads(match[1], 1);
                $.each(obj,function(i,value){
                    if(p == i)
                    {
                        p = [value];
                    }
                });
                return action+tag("span", { class: "slack-user" }, (p.length === 1 ? p[0] : p[1]));
            default:
                p = payloads(match[1]);
                return tag("a", { href: p[0],target:'_blank' }, (p.length === 1 ? p[0] : p[1]));
        }
    };

    var matchBold = function(match,slackMember) {
        return safeMatch(match, tag("strong", payloads(match[1])), "*");
    };

    var matchStrike = function(match,slackMember) {
        return safeMatch(match, tag("s", payloads(match[1])), "~");
    }; 

    var matchItalic = function(match,slackMember) {
        return safeMatch(match, tag("em", payloads(match[1])), "_");
    };

    var matchFixed = function(match,slackMember) {
        return safeMatch(match, tag("code", payloads(match[1])));
    };

    var notAlphanumeric = function(input) {
        return !RE_ALPHANUMERIC.test(input);
    };

    var notRepeatedChar = function(trigger, input) {
        return !trigger || trigger !== input;
    };

    var safeMatch = function(match, tag, trigger) {
        var prefix_ok = match.index === 0;
        var postfix_ok = match.index === match.input.length - match[0].length;

        if(!prefix_ok) {
            var charAtLeft = match.input.substr(match.index - 1, 1);
            prefix_ok = notAlphanumeric(charAtLeft) && notRepeatedChar(trigger, charAtLeft);
        }

        if(!postfix_ok) {
            var charAtRight = match.input.substr(match.index + match[0].length, 1);
            postfix_ok = notAlphanumeric(charAtRight) && notRepeatedChar(trigger, charAtRight);
        }

        if(prefix_ok && postfix_ok) {
            return tag;
        }
        return false;
    };

    var publicParse = function (text,slackMember) {
        
        if(typeof text === 'string') {
            var patterns = [
                {p: RE_TAG, cb: matchTag},
                {p: RE_BOLD, cb: matchBold},
                {p: RE_ITALIC, cb: matchItalic},
                {p: RE_STRIKE, cb: matchStrike},
                {p: RE_FIXED, cb: matchFixed}
            ];

            for (var p = 0; p < patterns.length; p++) {

                var pattern = patterns[p],
                    original = text,
                    result;

                while ((result = pattern.p.exec(original)) !== null) {
                    var replace = pattern.cb(result,slackMember);

                    if (replace) {
                        text = text.replace(result[0], replace);
                    }
                }
            }
        }

        return text;
    };

    return {
        parse: publicParse
    };

}));