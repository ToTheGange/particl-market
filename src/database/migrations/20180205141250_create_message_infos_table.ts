import * as Knex from 'knex';


exports.up = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.createTable('message_infos', (table: Knex.CreateTableBuilder) => {
            table.increments('id').primary();

            table.integer('action_message_id').notNullable();
            table.foreign('action_message_id').references('id')
                .inTable('action_messages').onDelete('cascade');

            table.string('address').notNullable();
            table.string('memo').notNullable();

            table.timestamp('updated_at').defaultTo(db.fn.now());
            table.timestamp('created_at').defaultTo(db.fn.now());
        })
    ]);
};

exports.down = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.dropTable('message_infos')
    ]);
};
