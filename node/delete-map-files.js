/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……
  //读文件中路径
  const fs = require("fs");
  function delDir(path){
	  //返回指定目录下所有文件名称的数组对象。
	  let filesName = fs.readdirSync(path);
	  let info = fs.statSync(path+"/"+ ele)	
	  //如果path是一个目录则返回true。
	  if(info.isDirectory()){
	                readDirSync(p+"/"+ ele);
	            }else{        
	                let reg = RegExp(/\.map$/);
					//删除文件操作
	                if(ele.match(reg)){
	                    fs.unlink(p+"/"+ele, function(err){
	                        if(err){
	                         throw err;
	                        }
	                        console.log('文件:'+ ele +'删除成功！');
	                    })    
	                }
	            }	
	        })
	    }
	    readDirSync(path);
	  };
	  
	  deleteMapFiles('./playground');
};

// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
