class ChangeAnnotationTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :annotations, :annotation, :body
  end
end
