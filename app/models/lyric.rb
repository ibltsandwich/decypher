# == Schema Information
#
# Table name: lyrics
#
#  id         :bigint(8)        not null, primary key
#  body       :string           not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Lyric < ApplicationRecord
  validates :body, :song_id, presence: true

  belongs_to :user
  
  belongs_to :song,
    class_name: :Song
  
  has_one :album,
    through: :song,
    source: :album

  has_one :artist,
    through: :album,
    source: :artist
end
