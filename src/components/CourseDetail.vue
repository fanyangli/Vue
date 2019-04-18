<template>
	<div class="container">
		<h2>该班课详情页面</h2>
		<div class="card">
			<img :src="course.cover">
			<p class="course-class">{{course.courseName}}</p>
			<p class="course-name">{{course.courseClass}}</p>
			<div class="btns">
					<button @click="settingCourse(course.courseId)" class="btn">修改班课</button>
				<button @click="overCourse(course.courseId)" class="btn">结束班课</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CourseDetail',
	data() {
		return {
			id: this.$route.params.id,
			course:{}
		};
	},
	
	methods:{
		overCourse:function(courseId){
			var _this = this;
			this.$http({
				method: 'put',
				url: 'http://localhost:8080/api/course',
				data: {
					courseId:this.id,
					courseName:_this.course.courseName,
					userId:_this.course.userId,
					courseClass:_this.course.courseClass, 
					cover:_this.course.cover,
					courseCode:_this.course.courseCode,
					finished:2
				}
			}).then(function() {
				alert('班课已结束');
				_this.$router.push('/');
			})
		}
	},
	
	created() {
		var _this = this;
		this.$http.get('http://localhost:8080/api/courses/' + this.id).then(function(response) {
			_this.course = response.data;
		});
	}
};
</script>
<style scoped>
	.course {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}
	.btns{
		display: flex;
	}
	
	.btn {
		width: 80px;
		height: 30px;
		border: 1px solid rgb(0, 187, 221);
		background-color: rgb(0, 187, 221);
		outline: none;
		color: #fff;
		margin-right: 20px;
	}
	.card{
		width:210px;
		background: #FFFFFF;
	}
	
	.card img{
		margin-top: 3.5px;
		margin-left: 3.5px;
		width: 100%;
		height: 100%;
	}
	
	.course-class {
		margin-top: 5px;
		font-size: 15px;
		color: #333;
		line-height: 18px;
		margin-bottom: 0.3125rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.course-name {
		font-size: 12px;
		color: gray;
	}
</style>