﻿import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {FolderIdWrapper} from "./FolderIdWrapper";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {FolderWrapper} from "./FolderWrapper";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {AbstractFolderIdWrapper} from "./AbstractFolderIdWrapper";
import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {FolderId} from "../ComplexProperties/FolderId";
//import {FolderWrapper} from "./FolderWrapper";
export class FolderIdWrapperList { //IEnumerable<AbstractFolderIdWrapper>
    get Count(): number { return this.ids.length; }
    //Item: AbstractFolderIdWrapper;
    private ids: AbstractFolderIdWrapper[] = [];// System.Collections.Generic.List<AbstractFolderIdWrapper>;
    Add(folder: Folder): void;
    Add(folderId: FolderId): void;
    /**this is to shim add method with easy use within file/module. */
    Add(folderOrId: Folder | FolderId): void;
    Add(folderOrId: Folder | FolderId): void {

        if (folderOrId instanceof Folder)
            this.ids.push(new FolderWrapper(folderOrId))
        else if (folderOrId instanceof FolderId)
            this.ids.push(new FolderIdWrapper(folderOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    }
    AddRange(folders: Folder[] /*System.Collections.Generic.IEnumerable<Folder>*/): void;
    AddRange(folderIds: FolderId[] /*System.Collections.Generic.IEnumerable<T>*/): void;
    AddRange(foldersOrIds: Folder[] | FolderId[]): void {
        if (foldersOrIds != null) {
            for (var folderOrId of foldersOrIds) {
                this.Add(folderOrId);
            }
        }
    }
    //GetEnumerator(): any { throw new Error("FolderIdWrapperList.ts - GetEnumerator : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("FolderIdWrapperList.ts - InternalToJson : Not implemented."); }
    Validate(version: ExchangeVersion): void {
        for (var folderIdWrapper of this.ids) {
            //var folderIdWrapper: AbstractFolderIdWrapper = item;
            folderIdWrapper.Validate(version);
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);

            for (var folderIdWrapper of this.ids) {
                //var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
    }

    __thisIndexer(index: number): AbstractFolderIdWrapper {
        return this.ids[index];
    }
}