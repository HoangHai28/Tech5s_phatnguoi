window.addComment = (function (u) {
  var v,
    y,
    p,
    f = u.document,
    I = {
      commentReplyClass: "comment-reply-link",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID",
    },
    e = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver,
    i = "querySelector" in f && "addEventListener" in u,
    n = !!f.documentElement.dataset;
  function t() {
    r(), e && new e(d).observe(f.body, { childList: !0, subtree: !0 });
  }
  function r(e) {
    if (i && ((v = h(I.cancelReplyId)), (y = h(I.commentFormId)), v)) {
      v.addEventListener("touchstart", a), v.addEventListener("click", a);
      var t = function (e) {
        if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode)
          return (
            y.removeEventListener("keydown", t),
            e.preventDefault(),
            y.submit.click(),
            !1
          );
      };
      y && y.addEventListener("keydown", t);
      for (
        var n,
          r = (function (e) {
            var t = I.commentReplyClass;
            (e && e.childNodes) || (e = f);
            t = f.getElementsByClassName
              ? e.getElementsByClassName(t)
              : e.querySelectorAll("." + t);
            return t;
          })(e),
          d = 0,
          o = r.length;
        d < o;
        d++
      )
        (n = r[d]).addEventListener("touchstart", l),
          n.addEventListener("click", l);
    }
  }
  function a(e) {
    var t = h(I.temporaryFormId);
    t &&
      p &&
      ((h(I.parentIdFieldId).value = "0"),
      t.parentNode.replaceChild(p, t),
      (this.style.display = "none"),
      e.preventDefault());
  }
  function l(e) {
    var t = this,
      n = o(t, "belowelement"),
      r = o(t, "commentid"),
      d = o(t, "respondelement"),
      t = o(t, "postid");
    n &&
      r &&
      d &&
      t &&
      !1 === u.addComment.moveForm(n, r, d, t) &&
      e.preventDefault();
  }
  function d(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void r();
  }
  function o(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function h(e) {
    return f.getElementById(e);
  }
  return (
    i && "loading" !== f.readyState
      ? t()
      : i && u.addEventListener("DOMContentLoaded", t, !1),
    {
      init: r,
      moveForm: function (e, t, n, r) {
        var d = h(e);
        p = h(n);
        var o,
          i,
          a,
          l,
          m = h(I.parentIdFieldId),
          c = h(I.postIdFieldId);
        if (d && p && m) {
          (l = p),
            (e = I.temporaryFormId),
            (n = h(e)) ||
              (((n = f.createElement("div")).id = e),
              (n.style.display = "none"),
              l.parentNode.insertBefore(n, l)),
            r && c && (c.value = r),
            (m.value = t),
            (v.style.display = ""),
            d.parentNode.insertBefore(p, d.nextSibling),
            (v.onclick = function () {
              return !1;
            });
          try {
            for (var s = 0; s < y.elements.length; s++)
              if (
                ((o = y.elements[s]),
                (i = !1),
                "getComputedStyle" in u
                  ? (a = u.getComputedStyle(o))
                  : f.documentElement.currentStyle && (a = o.currentStyle),
                ((o.offsetWidth <= 0 && o.offsetHeight <= 0) ||
                  "hidden" === a.visibility) &&
                  (i = !0),
                "hidden" !== o.type && !o.disabled && !i)
              ) {
                o.focus();
                break;
              }
          } catch (e) {}
          return !1;
        }
      },
    }
  );
})(window);
