# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：
1.git clone url (url为项目链接，克隆项目到本地文件夹)
2.git branch dev(创建分支) 
3.git add fileName (fileName文件全称，添加指定文件)，本人常用git add .(带点为全部添加到暂存区)
4.git commit -m"这里为注释说明" （无所谓单引号和双引号）
5.git pull origin dev (推送之前先拉取线上代码，origin为仓库名，dev为分支名，仓库可以命名为其他)
6.git push -u origin dev(如果第一次必须用这个，以后可用后面的) git push origin dev

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：
1.使用 git commit --amend --no-edit 进行附加提交
2.使用 git cherry-pick <commit_id> 进行不切换分支获取其他分支的提交记录文件
3.使用 git checkout -b new_branch 
	  git push origin new_branch:new_branch  进行git远程新建分支
4.使用 git branch -d dev 删除分支
