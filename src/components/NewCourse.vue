<template>
	<div class="container">
		<p class="title">班课名称：</p><input type="text" placeholder="请输入班课名称" v-model="course.courseName"   class="text"/>
		<p class="title">班级：</p><input type="text" placeholder="请输入班级" v-model="course.courseClass"  class="text"/>
		<p class="title">选择班课封面：</p>
		<div class="preview"  @click="handleClick()">
			<img :src="course.cover" class="cover" v-if="!show"/>
			<img src="../assets/plus.png" class="icon-plus" v-if="show" />
			<input type="file" @change="getFile($event)" style="display: none;" id="coverFile" />
		</div>
		<button @click="addCourse(course)" class="btn" >确定</button>
	</div>
</template>

<script>
export default {
	name: 'NewCourse',
	data() {
		return {
			file: '',
			loginUserId: 1,
			course:{
				courseName: '',
				courseClass: '',
				cover:''
			},
			show:true
		};
	},
	methods: {
		//点击图片预览区，即模拟点击文件选择组件
		handleClick: function() {
			document.getElementById('coverFile').click();
		},
		//图片预览
		getFile: function() {
			this.file = event.target.files[0];
			var windowURL = window.URL || window.webkitURL;
			this.course.cover = windowURL.createObjectURL(this.file);
			this.show = false;
		},
		
		addCourse: function(course) {
			var _this = this;
			this.$http({
				method: 'post',
				url: 'http://localhost:8080/api/course',
				data: {
					userId: _this.loginUserId,
					courseName: course.courseName,
					courseClass: course.courseClass,
					cover: course.cover,
					finished: 1
				}
			}).then(function() {
				alert('新增班课成功');
				_this.$router.push('/');
			});
		}
	}
};
</script>
<style scoped>
	.title{
		font-weight: 600;
	}
	
	.card{
		display: flex;
	}
	.container{
		display: flex;
		flex-direction: column;
	}
	
	.text{
		width: 50%;
		height: 40px;
		border: 1px solid #3A8EE6;
		border-radius: 3%;
		margin-bottom: 10px;
	}
	
	.btn{
		margin-top: 20px;
		width: 120px;
		height: 50px;
		border: 1px soild #3A8EE6;
		background-color: #3A8EE6;
		border-radius:10px;
		outline: none;
		color: #FFFFFF;
		
	}
	.btn1{
		margin-top: 20px;
		width: 120px;
		height: 50px;
		border: 1px soild #3A8EE6;
		background-color: #24CC6D;
		border-radius:10px;
		outline: none;
		color: #FFFFFF;
	}
	
.container {
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-left: 100px;
	background-color: #fff;
	margin-top: 20px;
}
.input-box {
	width: 500px;
	height: 40px;
	margin-bottom: 50px;
	font-size: 14px;
}
.btn {
	margin-top: 20px;
	width: 120px;
	height: 40px;
	border: 2px solid rgb(0, 187, 221);
	background-color: #fff;
	border-radius: 8px;
	cursor: pointer;
	outline: none;
	color: rgb(0, 187, 221);
	font-size: 16px;
}
.preview {
	margin-top: 10px;
	width: 150px;
	height: 150px;
	border: 2px dashed #aaa;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}
.icon-plus {
	width: 70px;
	height: 70px;
}
.cover {
	width: 100%;
	height: 100%;
}
</style>

