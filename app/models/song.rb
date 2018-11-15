# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Song < ApplicationRecord
  validates :title, :artist_id, presence: true

  belongs_to :user
  
  belongs_to :artist,
    class_name: :Artist

  belongs_to :album,
    class_name: :Album

  has_one :lyric,
    class_name: :Lyric
end
