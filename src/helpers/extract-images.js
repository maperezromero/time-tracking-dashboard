
const extractImages = ( folder = '' ) =>{
    let images= {};

    const importAll = (r) => {
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        // console.log(images);
         return images
       }

    return importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

}

module.exports = { extractImages };