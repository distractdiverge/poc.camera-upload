import React from 'react';

export default () =>
    <form className="card">
        <div className="card-header">
            <h5>Upload a File</h5>
        </div>
        <div className="card-body">
            <div className="form-group">
                <label for="file">File Upload:</label>
                <input type="file" name="file" id="file" accept="image/*;capture=camera" className="form-control-file" />
            </div>
            <div className="form-group">
                <button type="button" class="btn btn-primary">Upload</button>
            </div>
        </div>
        <style jsx>{`
            form {
                margin-top: 3em;
            }
        `}</style>
    </form>;