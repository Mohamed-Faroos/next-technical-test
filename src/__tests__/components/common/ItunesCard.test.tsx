import React from 'react';
import { render, screen } from '@testing-library/react';
import ITunesCard from '../../../components/common/ITunesCard';
import { Itunes } from '../../../common/interfaces';
import { TUNES_DATA_TYPE } from '../../../common/enums';

describe('<ITunesCard />', () => {

    it('should render artist item card', () => {
        let tunes: Itunes = {
            wrapperType: TUNES_DATA_TYPE.ARTIST,
            artistName : "Eminem"
        }
        render(<ITunesCard tunes={tunes} />);
        expect(screen.getByText(/Artist/)).toBeInTheDocument();
    });

    it('should render album item card', () => {
        let tunes: Itunes = {
            wrapperType: TUNES_DATA_TYPE.COLLECTION,
            artistName : "Eminem",
            collectionName : "encore"
        }
        render(<ITunesCard tunes={tunes} />);
        expect(screen.getByText(/Album •/)).toBeInTheDocument();
    });

    it('should render song item card', () => {
        let tunes: Itunes = {
            wrapperType: TUNES_DATA_TYPE.TRACK,
            artistName : "Eminem",
            trackName : "Mockingbird"
        }
        render(<ITunesCard tunes={tunes} />);
        expect(screen.getByText(/Song •/)).toBeInTheDocument();
    });
    
});