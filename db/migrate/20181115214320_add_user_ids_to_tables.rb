class AddUserIdsToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :user_id, :integer, :null => false
    add_column :albums, :user_id, :integer, :null => false
    add_column :songs, :user_id, :integer, :null => false
    add_column :lyrics, :user_id, :integer, :null => false
    add_index :artists, :user_id
    add_index :albums, :user_id
    add_index :songs, :user_id
    add_index :lyrics, :user_id
  end
end
