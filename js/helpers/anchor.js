class Anchor {
  addAnchor(anchor) {
    let url = window.location.href;

    url = url.replace(window.location.hash, "");
    url += "#" + anchor;
    window.open(url, "_self");
  }

  deleteAnchor() {
    if (window.location.hash) {
      window.location.href.split("#")[0];
    }
  }
}
