class RemoveIndexFromUpvotes < ActiveRecord::Migration[5.2]
  def change
    remove_index :upvotes, column: :user_id
    remove_index :upvotes, column: [:upvoteable_type, :upvoteable_id]
  end
end
