import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('problems', (table) => {
    table.increments('problem_id').primary();
    table.string('header').unique().notNullable();
    table.text('post_body').notNullable();
    table.text('tests').notNullable();
    table.specificType('categories', 'text ARRAY');
    table.integer('difficulty').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('problems');
}
