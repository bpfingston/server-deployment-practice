'use strict'

const app = require ('../app.js');
const supertest = require('supertest')
const { expect, it } = require('@jest/globals')

// this object can make mocked HTTP requests to an express exported at /app.js
const request = supertest(app);

describe('Test, test, 1, 2, 1, 2', () => {
    
    it('respond with a string on POST /talk', async () => {
        
        let string = 'I am the post WORD';

        
        let response = await request.post('/talk').send({
            words: string,
        });

        expect(response.status).toBe(200);
        expect(typeof(response.text)).toBe('string')
        expect(response.text).toBe(string);
    });
    
    it('respond with a string on GET /repeat', async () => {
        let response = await request.get('/repeat');

        expect(response.status).toBe(200);
        expect(typeof response.text).toBe('string');
    });
});
