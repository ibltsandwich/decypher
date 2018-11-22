# == Schema Information
#
# Table name: annotations
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  song_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_idx  :integer
#  end_idx    :integer
#  start_line :integer
#  end_line   :integer
#

class Annotation < ApplicationRecord
  validates :body, :start_idx, :end_idx, :start_line, :end_line, presence: true

  belongs_to :song

  belongs_to :user
end
