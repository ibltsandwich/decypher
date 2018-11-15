class CreateLyrics < ActiveRecord::Migration[5.2]
  def change
    create_table :lyrics do |t|
      t.string :body, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :lyrics, :song_id
  end
end
