const Users = require('./users.models')
const Courses = require('./courses.models')
const Categories = require('./categories.models')
const Videos = require('./videos.models')
const userCourses = require('./userCourses.model')

const initModels = () => {
  Users.hasMany(userCourses, { as: 'course', foreignKey: 'user_id' })
  userCourses.belongsTo(Users, { as: 'user', foreignKey: 'user_id' })
  //
  Courses.hasMany(userCourses, { as: 'course', foreignKey: 'course_id' })
  userCourses.belongsTo(Courses, { as: 'course', foreignKey: 'course_id' })
  //
  Categories.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' })
  Courses.hasMany(Categories, { as: 'categories', foreignKey: 'course_id' })
  //
  Videos.belongsTo(Courses, { as: 'course', foreignKey: 'course_id' })
  Courses.hasMany(Videos, { as: 'videos', foreignKey: 'course_id' })
}

module.exports = initModels
