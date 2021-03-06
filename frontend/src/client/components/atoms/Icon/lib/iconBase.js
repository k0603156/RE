/*eslint-disable*/
import React from "react";
import { IconContext, DefaultContext } from "./iconContext";

var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

    return __assign.apply(this, arguments);
  };

const __rest =
  (this && this.__rest) ||
  function (s, e) {
    const t = {};

    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };

function Tree2Element(tree) {
  return (
    tree &&
    tree.map(function (node, i) {
      return React.createElement(
        node.tag,
        {
          key: i,
          ...node.attr,
        },
        Tree2Element(node.child),
      );
    })
  );
}

export function GenIcon(data) {
  return function (props) {
    return React.createElement(
      IconBase,
      {
        attr: { ...data.attr },
        ...props,
      },
      Tree2Element(data.child),
    );
  };
}
export function IconBase(props) {
  const elem = function (conf) {
    const computedSize = props.size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className)
      className = (className ? `${className} ` : "") + props.className;

    const { attr } = props;
    const { title } = props;
    const svgProps = __rest(props, ["attr", "title"]);

    return React.createElement(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        ...conf.attr,
        ...attr,
        ...svgProps,
        className,
        style: {
          color: props.color || conf.color,
          ...conf.style,
          ...props.style,
        },
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg",
      },
      title && React.createElement("title", null, title),
      props.children,
    );
  };

  return IconContext !== undefined
    ? React.createElement(IconContext.Consumer, null, function (conf) {
        return elem(conf);
      })
    : elem(DefaultContext);
}
