var FileSystem = require('fs'); 
var path = require('path'); 

function AssetsPathPlugin( option  ){
	this.options = option || {};
}

function pathHandle( statsData ){
  var workingDir = process.cwd();
	var stats = statsData.toJson();
  if (stats.assetsByChunkName) {
    for(var key in stats.assetsByChunkName){
      var htmlFileName = key + ".html";
      if(!FileSystem.existsSync(path.join(workingDir, 'built', htmlFileName)))
        continue;
      var html = FileSystem.readFileSync(path.join(workingDir , 'built', htmlFileName), "utf8");

      var regjs = new RegExp("<script(.+)src=\"/static/(.+)" + "\.js(.*)\"", "g");
      var htmlOutput = html.replace(
          regjs,
          "<script$1src=\"static/$2" + "\.js$3\""); 

      var regCss = new RegExp("<link(.+)href=\"static/(.+)" + "\.css(.*)\"", "g");
      htmlOutput = htmlOutput.replace(
          regCss,
          "<link$1href=\"/static/$2" + "\.css$3\""); 

      FileSystem.writeFileSync(
          path.join(workingDir, 'built', htmlFileName),
          htmlOutput);
    }
  }
}

AssetsPathPlugin.prototype.apply = function(compiler) {
	compiler.plugin("done", function(statsData) {
		pathHandle(statsData);    
	});
};

module.exports = AssetsPathPlugin;