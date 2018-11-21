# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create({username: "sirdemo", email: "demo@demoman.com", password: "demopassword"})
user1 = User.create({username: "user1", email: "user1@user.com", password: "userpassword"})
user2 = User.create({username: "testuser", email: "test@user.com", password: "testpassword"})

artist1 = Artist.create({name: "Kendrick Lamar", user_id: 1})
artist2 = Artist.create({name: "Chance the Rapper", user_id: 1})
artist3 = Artist.create({name: "Drunken Tiger", user_id: 3})
artist4 = Artist.create({name: "Ariana Grande", user_id: 3})
artist5 = Artist.create({name: "Queen", user_id: 2})
artist6 = Artist.create({name: "Drake", user_id: 2})
artist7 = Artist.create({name: "Ed Sheeran", user_id: 2})

song1 = Song.create({title: "LOVE.", lyrics: File.read(Rails.root + 'db/love.txt'), artist_id: 1, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fd25e7043f51c2de6acaf6c39caa60da2.1000x1000x1.jpg", user_id: 1})
song2 = Song.create({title: "Blessings", lyrics: File.read(Rails.root + 'db/blessings.txt'), artist_id: 2, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fb17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg", user_id: 1})
# song3
# song4
# song5
# song6
# song7
# song8