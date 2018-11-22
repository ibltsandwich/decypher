class AddLinesToAnnotation < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :start_line, :integer
    add_column :annotations, :end_line, :integer
  end
end
