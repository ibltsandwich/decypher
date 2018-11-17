# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create({username: "sirdemo", email: "demo@demoman.com", password: "demopassword"})

artist1 = Artist.create({name: "Kendrick Lamar", user_id: 1})
artist2 = Artist.create({name: "Chance the Rapper", user_id: 1})
artist3 = Artist.create({name: "Drunken Tiger", user_id: 1})