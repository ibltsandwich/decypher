class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :annotation, null: false
      t.integer :song_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :annotations, :song_id
    add_index :annotations, :user_id
  end
end
