/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
// @ts-nocheck
/**
 * Snippet to initialize the Intercom instance
 *
 * @param appId - Intercom app id
 * @param [timeout=0] - Amount of milliseconds that the initialization should be delayed, defaults to 0
 * @param [cspNonce=undefined] - Content-Security-Policy nonce to use for the Intercom <script> tag during initializing
 *
 * @see {@link https://developers.intercom.com/installing-intercom/docs/basic-javascript}
 */
const initialize = (appId: string, timeout: number = 0, cspNonce?: string) => {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === 'function') {
    ic('reattach_activator');
    ic('update', w.intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args);
    };
    w.Intercom = i;
    var l = function () {
      setTimeout(function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        if (cspNonce) s.nonce = cspNonce;
        s.src = 'https://widget.intercom.io/widget/' + appId;
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }, timeout);
    };
    if (document.readyState === 'complete') {
      l();
    } else if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
};

export default initialize;
