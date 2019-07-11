# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_30_180738) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.text "photo_url"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
    t.index ["user_id"], name: "index_albums_on_user_id"
  end

  create_table "annotations", force: :cascade do |t|
    t.text "body", null: false
    t.integer "song_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "start_idx"
    t.integer "end_idx"
    t.integer "start_line"
    t.integer "end_line"
    t.index ["song_id"], name: "index_annotations_on_song_id"
    t.index ["user_id"], name: "index_annotations_on_user_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.string "bio"
    t.string "artist_img"
    t.string "header_img"
    t.index ["name"], name: "index_artists_on_name"
    t.index ["user_id"], name: "index_artists_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "user_id", null: false
    t.string "commentable_type", null: false
    t.bigint "commentable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.integer "album_id"
    t.text "lyrics"
    t.text "photo_url"
    t.index ["album_id", "title"], name: "index_songs_on_album_id_and_title", unique: true
    t.index ["artist_id", "title"], name: "index_songs_on_artist_id_and_title", unique: true
    t.index ["artist_id"], name: "index_songs_on_artist_id"
    t.index ["user_id"], name: "index_songs_on_user_id"
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "upvoteable_type", null: false
    t.bigint "upvoteable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "vote_type"
    t.index ["user_id", "upvoteable_type", "upvoteable_id"], name: "index_upvotes_on_user_id_and_upvoteable_type_and_upvoteable_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
