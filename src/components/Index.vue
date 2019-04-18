<template>
	<!-- 根容器 -->
	<div class="container">
		<div class="title">
			<router-link to="/new_course">
				<button @click="postCourse(course.courseId,index)" class="btn">新建班课</button>
			</router-link>
			<input style="text" placeholder="   搜索" class="text" />
			<button type="button" class="btn1"><img src="../assets/search.png" class="search"></button>
		</div>
		<div class="top">
			<p>进行中的班课</p>
			<p class="smallpont">{{count}}门进行中的班课</p>
		</div>
		<hr>
		<div class="course-conainer">
			<div class="course" v-show="iffinished===course.finished" v-for="(course, index) in courses" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="top">
					<div class="card">
						<div class="course-class">
							{{ course.courseClass }}
						</div>
						<div class="course-name">
							{{ course.courseName }}
						</div>
					</div>
					<div class="course-code" v-if="loginUserId === course.userId">
						{{ course.courseCode }}
					</div>
				</div>
			</div>
		</div>
		<div class="top">
			<p>已结束的班课</p>
			<p class="smallpont">{{courses.length-count}}门已结束的班课</p>
		</div>
		<hr>
		<div class="course-conainer">
			<div class="course course1" v-show="iffinished!==course.finished" v-for="(course, index) in courses" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="top">
					<div class="card">
						<div class="course-class">
							{{ course.courseClass }}
						</div>
						<div class="course-name">
							{{ course.courseName }}
						</div>
					</div>
					<div class="course-code1" v-if="loginUserId === course.userId">
						{{ course.courseCode }}
						<button @click="deleteCourse(course.courseId,index)" class="btn1">删除</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				loginUserId: 1,
				courses: [],
				iffinished: 1,
			};
		},
		methods: {
			deleteCourse: function(courseId, index) {
				var _this = this;
				this.$http({
					method: 'delete',
					url: 'http://localhost:8080/api/courses/' + courseId
				}).then(function() {
					alert('班课删除成功');
					_this.courses.splice(index, 1);
				});
			},
		},
		computed: {
			count: function() {
				var clength = this.courses.length;
				var num = 0;
				for (var i = 0; i < clength; i++) {
					if (this.iffinished === this.courses[i].finished) {
						num++
					}
				}
				return num;
			},
		},
		created() {
			var _this = this;
			this.$http.get('http://localhost:8080/api/courses').then(function(response) {
				console.log(response.data);
				_this.courses = response.data;
			});
		}
	};
</script>
<style scoped>
	.smallpont {
		color: #808080;
		font-size: 15px;
		;
	}

	.card {
		padding-left: 10px;
	}

	.text {
		height: 26px;
		width: 350px;
		border: 1px solid rgb(0, 187, 221);
		border-radius: 3px;
	}

	.btn1 {
		width: 60px;
		height: 30px;
		border: 1px solid rgb(0, 187, 221);
		background-color: rgb(0, 187, 221);
		outline: none;
		color: #fff;
		margin-right: 10px;
		
	}

	.search {
		width: 13px;
		height: 13px;
	}

	.container {
		padding-top: 20px;
	}

	.course-conainer {
		display: flex;
		flex-wrap: wrap;
	}

	.course {
		width: 250px;
		height: 330px;
		margin-right: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}

	.course-cover img {
		width: 95%;
		margin-top: 6px;
		margin-left: 6px;
		height: 250px;
	}

	.title {
		align-items: center;
		font-size: 16px;
		color: #333;
	}

	.btn {
		width: 120px;
		height: 40px;
		border: 1px solid #fff;
		background-color: rgb(0, 187, 221);
		border-radius: 20px;
		outline: none;
		color: #fff;
		font-size: 16px;
		margin-right: 230px;
	}

	.course-code {
		color: rgb(0, 187, 221);
		margin-right: 10px;
	}

	.course-code1 {
		color: rgb(0, 187, 221);
		margin-left: 60px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.avatar {
		display: flex;
		align-items: center;
	}

	.code {
		margin-left: 5px;
	}

	.username {}

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
