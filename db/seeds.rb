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
artist3 = Artist.create({name: "Ariana Grande", user_id: 3, artist_img: "https://images.genius.com/219c1ba6dea2575f6eb1803896877f57.580x580x1.png"})
artist4 = Artist.create({name: "Queen", user_id: 2})
artist5 = Artist.create({name: "Drake", user_id: 2})
artist6 = Artist.create({name: "Ed Sheeran", user_id: 2})
artist7 = Artist.create({name: "6lack", user_id: 3})

song1 = Song.create({title: "LOVE.", lyrics: File.read(Rails.root + 'db/love.txt'), artist_id: 1, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fd25e7043f51c2de6acaf6c39caa60da2.1000x1000x1.jpg", user_id: 1})
song2 = Song.create({title: "Blessings", lyrics: File.read(Rails.root + 'db/blessings.txt'), artist_id: 2, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fb17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg", user_id: 1})
song3 = Song.create({title: "i", lyrics: File.read(Rails.root + 'db/i.txt'), artist_id: 1, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fd595983644058b8bb5249c3ac6300d93.658x658x1.jpg", user_id: 1})
song4 = Song.create({title: "Same Drugs", lyrics: File.read(Rails.root + 'db/same_drugs.txt'), artist_id: 2, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F2e0b7d55f91e7f8402dc255e31ebebe6.750x750x1.jpg", user_id: 1})
song5 = Song.create({title: "Somebody to Love", lyrics: File.read(Rails.root + 'db/somebody_to_love.txt'), artist_id: 4, photo_url: "https://t2.genius.com/unsafe/221x220/https%3A%2F%2Fimages.genius.com%2F3b9ea86cc72615c328eab9198f4e7023.300x299x1.jpg", user_id: 2})
song6 = Song.create({title: "We Are The Champions", lyrics: File.read(Rails.root + 'db/we_are_the_champions.txt'), artist_id: 4, photo_url: "https://t2.genius.com/unsafe/222x220/https%3A%2F%2Fimages.genius.com%2F2a63a5005df0e1f09317de644421762a.300x298x1.jpg", user_id: 2})
song7 = Song.create({title: "goodnight n go", lyrics: File.read(Rails.root + 'db/goodnight_n_go.txt'), artist_id: 3, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F49f67bea2f0a72f8a8448c28b4964667.1000x1000x1.jpg", user_id: 3})
song8 = Song.create({title: "R.E.M", lyrics: File.read(Rails.root + 'db/rem.txt'), artist_id: 3, photo_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F49f67bea2f0a72f8a8448c28b4964667.1000x1000x1.jpg", user_id: 3})
song9 = Song.create({title: "Switch", lyrics: File.read(Rails.root + 'db/switch.txt'), artist_id: 7, photo_url: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F68d505210dfe645f563d657a5dd75757.1000x1000x1.jpg", user_id: 3})
song10 = Song.create({title: "East Atlanta Love Letter", lyrics: File.read(Rails.root + 'db/east_atlanta_love_letter.txt'), artist_id: 7, photo_url: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F68d505210dfe645f563d657a5dd75757.1000x1000x1.jpg", user_id: 3})

# song5
# song6
# song7
# song8