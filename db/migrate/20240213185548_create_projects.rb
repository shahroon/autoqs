class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :job_number
      t.text :description
      t.text :note

      t.integer :user_id

      t.timestamps
    end
  end
end
