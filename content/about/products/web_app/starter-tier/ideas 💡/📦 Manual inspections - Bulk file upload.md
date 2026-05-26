## User story - Adding files

- User opens hive section view
- User sees bulk upload div/block/button similar to [Frame side photo upload](https://www.notion.so/Frame-side-photo-upload-c9d3df6f053e41bbb7b8414b7c2bb397?pvs=21)
- User drags 12 files from his desktop
    - if user selected more files than frame sides - ignore them, but do add a warning message on top with a list of filenames that were ignored.
        - If ignored list is > 3, add `...` at the end and ignore the rest.
- files get uploaded one-by-one
    - show the progress if possible at least in amount of files, ex. `Uploaded 3 of 12 files`
- Files are assigned to frame sides, starting **from the left to the right →**
- File upload component should allow user to navigate to other views without cancelling upload
- When all files are uploaded, show success message `Upload is complete`