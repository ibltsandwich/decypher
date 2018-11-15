# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  belongs_to :artist,
    class_name: :Artist

  has_many :songs,
    class_name: :Song
end
