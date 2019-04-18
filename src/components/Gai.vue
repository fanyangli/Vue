<template>
	<!-- 根容器 -->
	<div class="container">
		<p class="">更改班课名称：</p><input type="text" placeholder="请输入想更改的班级名称" v-model="courseName" class="text" />
		<p class="">更改班级名称：</p><input type="text" placeholder="请输入想更改的班级" v-model="courseClass" class="text" />
		<p class="">更改图片：</p><input type="text" placeholder="请输入想更改的图片" v-model="cover" class="text" />
		<div class="update">
			<button @click="updateCourse(course.courseId)" class="btn">结束班课</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Gai',
		data() {

			return {
				loginUserId: 1,
				id: this.$route.params.id,
				courseName: '',
				courseClass: '',
				cover: '',
				course:{}
			};
		},
		methods: {
			updateCourse: function(courseId) {
				var _this = this;
				this.$http({
					method: 'put',
					url: 'http://localhost:8080/api/course',
					data: {
						courseId: this.id,
						courseName: _this.courseName,
						userId: _this.loginUserId,
						courseClass: _this.courseClass,
						cover: _this.cover,
						courseCode: _this.courseCode,
						finished: 1
					}
				}).then(function() {
					alert('班课修改成功');
					_this.$router.push('/');
				})
			}
		},
		created() {
			var _this = this;
			this.$http.get('http://localhost:8080/api/courses/' + this.id).then(function(response) {
				_this.course= response.data;
			});
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}

	.text {
		width: 50%;
		height: 40px;
		border: 1px solid #3A8EE6;
		border-radius: 3%;
	}

	.btn {
		margin-top: 20px;
		width: 120px;
		height: 50px;
		border: 1px soild #3A8EE6;
		background-color: #3A8EE6;
		border-radius: 10px;
		outline: none;
		color: #FFFFFF;
	}

	.newcourse {}
</style>
