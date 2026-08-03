<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CatalogResource\Pages;
use App\Models\Catalog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CatalogResource extends Resource
{
    protected static ?string $model = Catalog::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';

    protected static ?string $navigationGroup = 'Konten Website';

    protected static ?string $navigationLabel = 'Katalog Produk';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title_id')
                    ->label('Judul (Bahasa Indonesia)')
                    ->helperText('Contoh: Katalog Produk Fire Hydrant')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title_en')
                    ->label('Judul (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title_zh')
                    ->label('Judul (中文)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('cover')
                    ->label('Cover (opsional)')
                    ->directory('catalogs/covers')
                    ->image(),
                Forms\Components\FileUpload::make('file')
                    ->label('File PDF')
                    ->directory('catalogs')
                    ->acceptedFileTypes(['application/pdf'])
                    ->openable()
                    ->downloadable()
                    ->required(),
                Forms\Components\TextInput::make('sort_order')
                    ->label('Urutan Tampil')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->columns([
                Tables\Columns\ImageColumn::make('cover')
                    ->label('Cover'),
                Tables\Columns\TextColumn::make('title_id')
                    ->label('Judul (ID)')
                    ->searchable(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCatalogs::route('/'),
            'create' => Pages\CreateCatalog::route('/create'),
            'edit' => Pages\EditCatalog::route('/{record}/edit'),
        ];
    }
}
