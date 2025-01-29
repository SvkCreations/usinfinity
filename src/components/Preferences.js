import React from 'react'
import JourneyFeaturette from './JourneyFeaturette'

export default function Preferences() {
    return (
        <div className='my-5 py-5'>
            <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-2" data-aos='fade-up'>Our Preferences</h1>
            <table className="table mt-4">
                <thead>
                    <tr data-aos='fade-up'>
                        <th scope="col">Topic</th>
                        <th scope="col">Soubhik</th>
                        <th scope="col">Udhrity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-aos='fade-up'>
                        <th scope="row">Colour</th>
                        <td>Black, Blue, White</td>
                        <td>Black, White, Sky</td>
                    </tr>
                    <tr data-aos='fade-up'>
                        <th scope="row">Movies</th>
                        <td>3 idiots, Interstellar, Praktan, The Avengers, K3G</td>
                        <td>Jab We Met, 3 idiots, Twilight, Avengers: Infinity War, Avengers: Endgame, Tonic, Sudhu tomari Jonyo</td>
                    </tr>
                    <tr data-aos='fade-up'>
                        <th scope="row">Song</th>
                        <td>Aaoge jab tum, Aaj jaane ki zid, Amaro Porano Jaha chay, Perfect, Tum mile, Hoshwalo ko khabar kya</td>
                        <td>Thousand years, Perfect, Let her go, Tum Sahi, Humdard, Enna Sona, Egiye de, O je mane na mana, Preme pora baron, See you again</td>
                    </tr>
                    <tr data-aos='fade-up'>
                        <th scope="row">Hobby</th>
                        <td>Cricket, Listening to songs, Digital Painting, Lyad</td>
                        <td>Watching K-dramas, Badminton, Guitar, Lyad</td>
                    </tr>
                </tbody>
            </table>
            <JourneyFeaturette/>
        </div>
    )
}
