class AddUniquenessToUpvotes < ActiveRecord::Migration[5.2]
  def change
    add_index :upvotes, [:user_id, :upvoteable_type, :upvoteable_id], unique: true
  end
end
