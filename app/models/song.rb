# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  album_id   :integer
#  lyrics     :text
#  photo_url  :text
#

class Song < ApplicationRecord
  validates :title, :artist_id, :lyrics, presence: true
  
  belongs_to :user
  
  belongs_to :artist,
    class_name: :Artist

  belongs_to :album,
    class_name: :Album,
    optional: true

  has_many :annotations

  def find_artist(artist_name, user_id)
    artist = Artist.find_by(name: artist_name)
    if artist == nil
      return Artist.create({name: artist_name, user_id: user_id}).id 
    end
    return artist.id
  end
end
