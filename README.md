# Graduation Ceremony Instructions

## Whit's Way or the Highway
-- Use this manual way if you don't have Microsoft Excel. Updated September 2022 --
- Clone down repo
- Manually change the student objects in `src/students/Five-20.js`
    - Go down the Mod 7 Spreadsheet for names and make sure to only include those who are graduating.
    - Easiest place for a photo is their github profile images, but you can also look at LinkedIn, AngelList, & Portfolio site (can be easily found in InterviewDB)
- Remember to change the h1 title to the current cohort.
- Run `npm run start` to build the pack. 
- Run live server on `index.html` to view and present!

-----------------------------
## 2022 Instructions: (Ricky's Edition)
-- Use this way if you want to use Microsoft Excel sheet to do this automatically --
- Clone Down Repo
- Copy and Paste Current Students from Progress a/A
    - Add students and github usernames onto excel sheet in `./src/data/test.xlsx`
- Once data has been added in run `npm run data`
    - data returns array of objects which includes name and github images.
    - copy array from terminal and replace existing student variable in `./src/students/Five-20.js`
- Check if students have images:
    - use live html on testimage.html in ./src/data to check if student doesn't have an image.
    - Manually replace temporary image with linkedin image by visiting their angelist or linkedin pages and copy + pasting.
- Once everything is checked, run `npm run start`
    - to bundle everything to `main.js` and live html `index.html` to see results.
    - You can comment out music if its annoying.


-------------------------------------


## To add cohort:
-- old instructions??? --
- Clone down repo
- Go to a/A name game to get student data file (remove dismissed students)
    - Repo link: https://github.com/appacademy/aa-picture-game
    - If the students in the existing student data file are not from the correct cohort, follow the directions on the README for the `aa-picture-game` repo to get the data for the correct stoods
- Add `<cohort-start-date>.js` file to the `src/students` folder (export as array of student POJOs)
- Change the import in `index.js` to use the new file for the student data
- Update the `h1` in the `index.html` file with the new cohort's title
- Don't forget to webpack it! run `npm run build`
- Push it up! (Wait a few minutes for github pages)
- Have fun!

### Old Links that were included:
Live Example Site: https://carlosaicrag.github.io/virtual_graduation/
Actual Domain: https://appgraduation.ml
