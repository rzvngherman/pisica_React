import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
    const images_a4 = import.meta.glob(
        [
            // absolute path from-src:
            '/src/assets/imgs/2025/*.{png,jpg,jpeg,webp}',
            '/src/assets/imgs/2026/*.{png,jpg,jpeg,webp}',
        ],
        {     
            eager: true,
            as: 'url'
        }
    );

    const imageList: GalleryItem[] = Object.entries(images_a4)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, url], index) => ({
            id: (index + 1),
            url,
            caption: String(index + 1),
            added_date: new Date() // build time //new Date(meta[name])
        }));

    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-stone-900 font-serif">O viață în imagini</h2>
                <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                    Imagini exclusive din culise cu programul foarte încărcat de somn și mâncat al lui Botic Mâțescu.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {imageList.map((img) => (
                    <div
                        key={img.id}
                        className="group relative bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        onClick={() => setSelectedImage(img)}
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full h-80 overflow-hidden bg-stone-200">
                            <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-stone-900">
                                <ZoomIn size={24} />
                            </div>
                        </div>
                        <div className="p-4 border-t border-stone-100">
                            <p className="text-stone-700 font-medium text-center">{img.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.caption}
                            className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                        />
                        <p className="mt-4 text-white text-xl font-light tracking-wide">{selectedImage.caption}</p>
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default GalleryPage;
