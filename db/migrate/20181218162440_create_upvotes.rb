class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.references :upvoteable, polymorphic: true, index: true, null: false
      t.timestamps
    end
    add_index :upvotes, :user_id
  end
end
