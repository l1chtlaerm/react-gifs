import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'B7nnii76b2K06bHFiHChtJlg8u7QlFTR';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "QbumCX9HFFDQA"
        };
    }

    search = (query) => {
        giphy({ apiKey: GIPHY_API_KEY, https: true })
            .search({
                q: query,
                rating: 'g',
                limit: 10
            }, (err, result) => {
                this.setState({
                    gifs: result.data
                });
            });
    }

    selectGif = (id) => {
        this.setState({
            selectedGifId: id
        });
    }

    render() {
        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
                </div>
            </div>
        );
    }
}

export default App;
