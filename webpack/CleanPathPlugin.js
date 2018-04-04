var FileSystem = require('fs'); 
var path = require('path'); 
var workingDir = process.cwd();
/*
	exclude: array[]
	path: array[]
*/
function CleanPathPlugin( path, option  ){
	this.options = option || {};
	this.paths = path;
}

function removedFolder(dirs){
  var handlePath = path.join(workingDir, dirs);
  if(!FileSystem.existsSync(handlePath))
    return;
  var files = FileSystem.readdirSync(handlePath);//读取该文件夹
  files.forEach((file, index)=>{
    var curPath = handlePath + "/" + file;
    if(FileSystem.statSync(curPath).isDirectory()) { 
      removedFolder.call(this, dirs + "/" + file);
    }else{
      if( !(this.options.exclude && this.options.exclude.includes(file)) )
        FileSystem.unlinkSync(curPath);
    }
  });
  try{
    FileSystem.rmdirSync(handlePath);
  }catch(e){
    console.log(e.message);
  }  
}


function cleanHandle(){
  //通过 CleanPathPlugin 作用域调用 此处this为CleanPathPlugin，mPath是CleanPathPlugin实例化后的变量
	if(this.paths && this.paths.length > 0){
		this.paths.forEach((elem)=>{
			removedFolder.call(this, elem); //arrow func 此处this和 函数外一致，否则作用域为global
		});
	}
}

CleanPathPlugin.prototype.apply = function(compiler) {
	var _this = this; 
	compiler.plugin("compile", function() {
    cleanHandle.call(_this); // 此处 _this 作用域为 CleanPathPlugin， this作用域为webpack callback
  });
};

module.exports = CleanPathPlugin;
