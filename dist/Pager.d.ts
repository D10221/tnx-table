import { EventArgs, IObservableThing } from "tnx-core";
import { Visibility, iPager } from "./definitions";
export declare class Pager implements iPager, IObservableThing, Rx.Disposable {
    /***
     * IObservableThing implementation
     * @type {Subject<EventArgs>}
     */
    xEvents: Rx.Subject<EventArgs>;
    pageLen: number;
    currentPage: number;
    /***
     * desired max bullets count
     * @type {number}
     */
    bulletsLen: number;
    collectionLength: number;
    constructor(pageLen?: number);
    disposables: Rx.CompositeDisposable;
    dispose(): void;
    id: any;
    private build(data);
    /***
     * replesents '< [0] [1] [3] ... >' page bullets
     * has to be emoized, or angular crashes , too many changes
     * @returns {PageBullet[]}
     */
    pageBullets: number[];
    raiseNextEvent(key: string, value: any): void;
    nOfPages: number;
    pageStart: number;
    pageEnd: number;
    nextPage(): any;
    nextPage(n?: number, fast?: boolean): any;
    nextPage(direction?: string, n?: number, fast?: boolean): any;
    /***
     * Must be Visible Index
     * to do not affect filtering
     * @param index
     * @returns {boolean}
     */
    isIndexVisible: (index: number, collectionLength: number) => boolean;
    visibility: Visibility;
    isVisible: boolean;
}
