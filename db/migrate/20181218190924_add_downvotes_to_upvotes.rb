class AddDownvotesToUpvotes < ActiveRecord::Migration[5.2]
  def change
    add_column :upvotes, :vote_type, :string
  end
end
