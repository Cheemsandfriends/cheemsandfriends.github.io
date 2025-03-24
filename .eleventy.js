const date = require("date-and-time");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const urlSite = "https://cheemsandfriends.github.io/";

const getAsset = (asset) => {
      
  let file = asset.split(".");
  let extension = file[file.length - 1];
  
  let urlDirecter = "";

  switch (extension.trim())
  {
    case "css": // styling shit
      urlDirecter = "css/";
      break;

    case "png": // Images
    case "svg":
    case "jpg":
    case "jpeg":
    case "bmp":
    case "gif":
      urlDirecter = "images/";
      break;
    
    case "js":
    case "txt":
      urlDirecter = "data/";
      break;
    case "mp3":
      urlDirecter = "music/";
      break;
  }
  return urlSite + "assets/" + urlDirecter + asset.split(" ").join("%20");
}
const captionImage = (vars) => {

  let img = vars.split(", ");

  let str = "";

  let id = (img.length > 2) ? img[2] : undefined;
  let ident = "";
  
  if (id != undefined)
    ident = "id=\"" + id + "\"";
  
  console.trace(img);
  // str = "<div class='captionImg' " + ident + ">";


  str += "\n<img " + ident + " src='" + getAsset(img[0]) + "' alt=\"" + img[1] + "\" />";
  str += "\n<span>" + img[1] + "</span>";

  // str += "\n</div>";
  return str;
}

const iconify = (dateObj) => {
  let str = "";

  for (let i = 0; i < dateObj.length; i++)
  {
    let url = new URL(dateObj[i]);
    
    let urlArr = url.hostname.split(".");
    
    str += '<a href="'+url.toString()+'"><img src="'+getAsset("icons/" + urlArr[urlArr.length - 2] + ".svg")+'"/></a>\n\t\t';
  }

  
  return str;
}

const titleFilter = (title) => {

  let tit = "CheemsAndFriends";
  
  if (title != undefined)
    tit += ": " + title;

  return tit;
}

module.exports = function(eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("./assets/");
    eleventyConfig.addLayoutAlias("default", "mainLayout.html");

    eleventyConfig.addFilter("iconify", iconify);
    eleventyConfig.addFilter("getAsset", getAsset);
    eleventyConfig.addFilter("captionImage", captionImage);
    eleventyConfig.addFilter("titleFilter", titleFilter);
    
  };