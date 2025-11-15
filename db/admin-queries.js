import pool from './pool.js'

export async function getAllBlogs() {
    let sql = `select id, title, created_at, likes, published from blogs order by created_at desc`;
    let result = await pool.query(sql);
    return result.rows;
}

export async function getAllComments() {
    let sql = `select * from comments order by created_at desc`;
    let result = await pool.query(sql);
    return result.rows;
}

export async function getAllBlogComments(blog_id) {
    let sql = `select * from comments where blog_id=$1 order by created_at desc`;
    let result = await pool.query(sql, [blog_id]);
    return result.rows;
}

export async function getBlog(id) {
    let sql = `select * from blogs where id=$1`;
    let result = await pool.query(sql, [id]);
    return result.rows[0];
}

export async function getAdmin(email) {
    let sql = `select * from users where email=$1`;
    let result = await pool.query(sql, [email]);
    return result.rows[0];
}

export async function insertBlog(blog, user_id) {
    let sql = `
        insert into blogs (title, content, author_id, published)
        values ($1, $2, $3, $4)
        returning id, title, created_at
    `;
    let result = await pool.query(sql, [blog.title, blog.content, user_id, blog.published || false]);
    return result.rows[0];
}

export async function updateBlog(id, blog) {
    // Update Blog Safely 
    const fields = [];
    const values = [];
    let queryIndex = 1;

    if (blog.content !== undefined) {
        fields.push(`content = $${queryIndex++}`);
        values.push(blog.content);
    }
    if (blog.title !== undefined) {
        fields.push(`title = $${queryIndex++}`);
        values.push(blog.title);
    }
    if (blog.published !== undefined) {
        fields.push(`published = $${queryIndex++}`);
        values.push(blog.published);
    }

    if (fields.length === 0) return null;

    values.push(id);
    const sql = `update blogs set ${fields.join(', ')} where id = $${queryIndex} returning id`;

    let result = await pool.query(sql, values);
    return result.rowCount > 0;
}

export async function deleteBlog(id) {
    let sql = `delete from blogs where id=$1`;
    let result = await pool.query(sql, [id]);
    return result.rowCount > 0;
}