# == Schema Information
#
# Table name: annotations
#
#  id         :bigint(8)        not null, primary key
#  annotation :text             not null
#  song_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ApplicationRecord
  validates :annotation, presence: true

  belongs_to :song

  belongs_to :user
end
