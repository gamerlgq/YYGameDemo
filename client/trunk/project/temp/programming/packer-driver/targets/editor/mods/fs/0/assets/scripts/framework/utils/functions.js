System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v2, v3, RedPoint, Logger, _crd;

  function setNodeVisible(node, isVisible) {
    // let opComp = node.addComponent(UIOpacity)
    // opComp.opacity = isVisible ? 255:0
    node.active = isVisible;
  }

  function posAdd(node, offPos, minX, maxX, minY, maxY) {
    node.position = node.position.add(v3(offPos.x, offPos.y));
    let x, y;

    if (minX && node.position.x < minX) {
      x = minX;
    }

    if (maxX && node.position.x > maxX) {
      x = maxX;
    }

    if (minY && node.position.y < minY) {
      y = minY;
    }

    if (maxY && node.position.y > maxY) {
      y = maxY;
    }

    node.position = v3(x || node.position.x, y || node.position.y);
  }
  /**
   * 递归找到node节点的红点节点，并显示/隐藏
   * @param node 
   * @param isShow 
   */


  function showRedPoint(node, isShow) {
    let comp = node.getComponentInChildren(_crd && RedPoint === void 0 ? (_reportPossibleCrUseOfRedPoint({
      error: Error()
    }), RedPoint) : RedPoint);

    if (!comp) {
      (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger).e("找不到红点节点");
      return;
    }

    comp.node.active = isShow;
  }

  function v2ToV3(v2) {
    return v3(v2.x, v2.y, 0);
  }

  function v3ToV2(v3) {
    return v2(v3.x, v3.y);
  }
  /**
   * 把字符串序列化UTF8字节流
   * @param text 
   * @returns 
   */


  function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];

    for (var i = 0; i < code.length; i++) {
      const c = code.charAt(i);

      if (c === '%') {
        const hex = code.charAt(i + 1) + code.charAt(i + 2);
        const hexVal = parseInt(hex, 16);
        bytes.push(hexVal);
        i += 2;
      } else bytes.push(c.charCodeAt(0));
    }

    return bytes;
  } //反序列化UFT8字节 =>字符串


  function decodeUtf8(bytes) {
    var encoded = "";

    for (var i = 0; i < bytes.length; i++) {
      encoded += '%' + bytes[i].toString(16);
    }

    return decodeURIComponent(encoded);
  }
  /**
   * 字符串转为ArrayBuffer对象
   * @param str 字符串
   * @returns 
   */


  function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节

    var bufView = new Uint16Array(buf);

    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }

    return buf;
  }

  function _reportPossibleCrUseOfRedPoint(extras) {
    _reporterNs.report("RedPoint", "../../app/views/common/RedPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./Logger", _context.meta, extras);
  }

  _export({
    setNodeVisible: setNodeVisible,
    posAdd: posAdd,
    showRedPoint: showRedPoint,
    v2ToV3: v2ToV3,
    v3ToV2: v3ToV2,
    encodeUtf8: encodeUtf8,
    decodeUtf8: decodeUtf8,
    str2ab: str2ab
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      RedPoint = _unresolved_2.RedPoint;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0cc59J6BFFY6D6cR+vugKe", "functions", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=functions.js.map