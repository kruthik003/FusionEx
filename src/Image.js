function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  // Include .webp in the regex pattern
  const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg|webp|jpg|JPG)$/));
  
  export default images;
  